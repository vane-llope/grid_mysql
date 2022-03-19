<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;

class StudentsController extends Controller
{
    
    public function index(){
        $student = student::all();
        return view('index',['student'=>$student]);
    }
}
