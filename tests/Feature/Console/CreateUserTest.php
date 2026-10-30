<?php

namespace Tests\Feature\Console;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class CreateUserTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_creates_a_user(): void
    {
        $this->artisan('user:create', ['--name' => 'Mirco', '--email' => 'mirco@example.com'])
            ->expectsQuestion('Passwort', 'geheim-12345')
            ->assertSuccessful();

        $user = User::where('email', 'mirco@example.com')->firstOrFail();

        $this->assertTrue(Hash::check('geheim-12345', $user->password));
    }

    public function test_it_rejects_a_duplicate_email(): void
    {
        User::factory()->create(['email' => 'mirco@example.com']);

        $this->artisan('user:create', ['--name' => 'Mirco', '--email' => 'mirco@example.com'])
            ->expectsQuestion('Passwort', 'geheim-12345')
            ->assertFailed();

        $this->assertSame(1, User::count());
    }

    public function test_it_rejects_a_short_password(): void
    {
        $this->artisan('user:create', ['--name' => 'Mirco', '--email' => 'mirco@example.com'])
            ->expectsQuestion('Passwort', 'kurz')
            ->assertFailed();

        $this->assertSame(0, User::count());
    }
}
