<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserController extends Controller
{

	 // public function __construct()
  //   {
  //       $this->middleware('auth:api');

  //   }

        public function profile()
    {
        // $userid = Auth::user()->id;
        $userid = auth()->user()->name;
        $user = User::find($userid);
        // return $userid;
      return response()->json([
            'user' => $userid
        ]);

    }
}
