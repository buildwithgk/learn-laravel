<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    $response = Http::get('http://localhost:3000/');
    return $response->body(); // This will fetch content from Node.js server (public/views/index.html)
});

// Route::get('/about', function() {
//     $response = Http::get('http://localhost:3000/about');
//     return $response->body();
// });

Route::get('/{page_name}', function($page_name) {
    $response = Http::get("http://localhost:3000/$page_name");
    return $response->body();
});