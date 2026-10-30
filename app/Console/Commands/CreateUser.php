<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;

#[Signature('user:create {--name= : Name des Benutzers} {--email= : E-Mail-Adresse}')]
#[Description('Legt einen neuen Benutzer an')]
class CreateUser extends Command
{
    public function handle(): int
    {
        $input = [
            'name' => $this->option('name') ?? $this->ask('Name'),
            'email' => $this->option('email') ?? $this->ask('E-Mail'),
            'password' => $this->secret('Passwort'),
        ];

        $validator = Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->error($error);
            }

            return self::FAILURE;
        }

        User::create($input);

        $this->info("Benutzer {$input['email']} wurde angelegt.");

        return self::SUCCESS;
    }
}
