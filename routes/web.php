<?php

use Inertia\Inertia;
use App\Events\Hello;
use App\Events\SensorEvent;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SensorController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [AdminController::class, 'index'])->middleware(['auth', 'verified'])->name('home');
Route::get('/allTable', [AdminController::class, 'allTable'])->middleware(['auth', 'verified'])->name('allTable');
Route::get('/prediction', [AdminController::class, 'prediction'])->middleware(['auth', 'verified'])->name('prediction');

Route::get('/postSensor', [SensorController::class, 'store']);


Route::get('/bro', function () {
    $data = [
        'nama' => 'amirull azmi',
        'nim' => 'D1041181009'
    ];
    SensorEvent::dispatch($data);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
