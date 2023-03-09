<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class AdminController extends Controller
{
    //
    public function index()
    {
        $data = [
            "title" => "We On",
            "active" => "dashboard",
            "sensor" => Sensor::latest('id')->first(),
        ];

        return Inertia::render('Admin/Home', $data);
    }

    public function allTable()
    {
        $data = [
            "title" => "We On",
            "active" => "allTable",
            "sensor" => Sensor::orderBy('id', 'desc')->get(),
        ];

        return Inertia::render('Admin/AllTable', $data);
    }
}
