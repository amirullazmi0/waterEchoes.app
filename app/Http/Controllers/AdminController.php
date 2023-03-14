<?php

namespace App\Http\Controllers;

use App\Events\SensorEvent;
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
            "title" => "We On - Dashboard",
            "active" => "dashboard",
            "sensor" => Sensor::latest('id')->first(),
        ];

        SensorEvent::dispatch($data);

        return Inertia::render('Admin/Home', $data);
    }

    public function allTable()
    {
        $data = [
            "title" => "We On - All Table",
            "active" => "allTable",
            "sensor" => Sensor::orderBy('id', 'desc')->get(),
        ];
        return Inertia::render('Admin/AllTable', $data);
    }

    public function prediction()
    {
        $data = [
            "title" => "We On - Prediction",
            "active" => "prediction",
            "sensor" => Sensor::orderBy('id', 'desc')->get(),
        ];

        return Inertia::render('Admin/Prediction', $data);
    }
}
