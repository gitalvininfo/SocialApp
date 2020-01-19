<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{


    public function handle($request, Closure $next)
    {
        $headers = [
            // for angular localhost:4200   
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => 'POST,GET,OPTIONS,PUT,DELETE',
            'Access-Control-Allow-Headers' => 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Authorization',
            'Access-Control-Allow-Credentials' => 'true'
        ];
        
    if ($request->getMethod() == "OPTIONS"){
            return response()->json('OKEZZZZ',200,$headers);
        }
        $response = $next($request);
        foreach ($headers as $key => $value) {
            $response->header($key, $value);
        }
        return $response;
    }
}
