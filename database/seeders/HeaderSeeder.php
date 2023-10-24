<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HeaderData;

class HeaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HeaderData::create([
            'site_address' => '123 Main St, City, Country',
            'site_email' => 'info@example.com',
            'upcoming_news' => 'Upcoming events and news details',
            'social_links' => json_encode(['facebook' => 'https://www.facebook.com/example', 'twitter' => 'https://twitter.com/example']),
            'site_logo' => 'path/to/logo.png',
            'site_menu' => json_encode(['Home', 'About Us', 'Services', 'Contact Us']),
            'site_contact' => '123-456-7890'
        ]);
    }
}
