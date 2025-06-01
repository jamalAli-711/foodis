<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostView extends Model
{
    //
    protected $fillable = [
       
        'user_id',
        'post_id',
        'ip_address',
        'user_agent',
      
    ];
}
