<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Sensor;
use App\Events\SensorEvent;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Carbon\Carbon;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class AdminController extends Controller
{
    //
    public function index()
    {
        $jumlahData = Sensor::all()->count();
        $days = 31;
        // WEEKLY VALUE 1
        $aveWeeklyValue1 = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value1')  / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value1')  / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value1') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value1') / $jumlahData,
        ];

        // WEEKLY VALUE 2
        $aveWeeklyValue2 = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value2') / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value2') / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value2') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value2') / $jumlahData,
        ];

        // WEEKLY VALUE 3
        $aveWeeklyValue3  = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value3') / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value3') / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value3') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value3') / $jumlahData,
        ];


        // WEEKLY VALUE 4
        $aveWeeklyValue4 = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value4') / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value4') / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value4') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value4') / $jumlahData,
        ];

        // WEEKLY VALUE 5
        $aveWeeklyValue5 = [
            Sensor::whereDay('created_at', '<=', '7')->sum('value5') / $jumlahData,
            Sensor::whereDay('created_at', '>', '7')->whereDay('created_at', '<=', '14')->sum('value5') / $jumlahData,
            Sensor::whereDay('created_at', '>', '14')->whereDay('created_at', '<=', '21')->sum('value5') / $jumlahData,
            Sensor::whereDay('created_at', '>', '21')->sum('value5') / $jumlahData,
        ];

        //=========================================================== 
        // Monthly
        for ($month = 1; $month <= 12; $month++) {
            $aveMonthlyValue1[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value1')  / $jumlahData;
            $aveMonthlyValue2[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value2')  / $jumlahData;
            $aveMonthlyValue3[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value3')  / $jumlahData;
            $aveMonthlyValue4[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value4')  / $jumlahData;
            $aveMonthlyValue5[$month - 1] = Sensor::whereMonth('created_at', '=', $month)->sum('value5')  / $jumlahData;
        }
        $data = [
            "title" => "We On - Dashboard",
            "active" => "dashboard",
            "sensor" => Sensor::latest('id')->first(),
            "allValue1" => Sensor::orderBy('id', 'desc')->pluck('value1'),
            "allValue2" => Sensor::orderBy('id', 'desc')->pluck('value2'),
            "allValue3" => Sensor::orderBy('id', 'desc')->pluck('value3'),
            "allValue4" => Sensor::orderBy('id', 'desc')->pluck('value4'),
            "allValue5" => Sensor::orderBy('id', 'desc')->pluck('value5'),
            "jumlahData" => $jumlahData,
            "weekly" => [
                "value1" => $aveWeeklyValue1,
                "value2" => $aveWeeklyValue2,
                "value3" => $aveWeeklyValue3,
                "value4" => $aveWeeklyValue4,
                "value5" => $aveWeeklyValue5,
            ],
            "monthly" => [
                "value1" => $aveMonthlyValue1,
                "value2" => $aveMonthlyValue2,
                "value3" => $aveMonthlyValue3,
                "value4" => $aveMonthlyValue4,
                "value5" => $aveMonthlyValue5,
            ],
        ];
        // dd($data['sensor']->created_at->format('d M Y'));
        return Inertia::render('Admin/Home', $data);
    }

    public function allTable()
    {
        $date = Carbon::now();


        $jumlahData = Sensor::all()->count();
        $data = [
            "title" => "We On - All Table",
            "active" => "allTable",
            "sensor" => Sensor::orderBy('id', 'desc')->get(),
            "jumlahData" => $jumlahData,
        ];
        // dd($data['sensor'][0]->created_at->format('d M Y'));
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
