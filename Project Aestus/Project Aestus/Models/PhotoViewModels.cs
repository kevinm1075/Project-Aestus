using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FlickrNet;

namespace Project_Aestus.Models
{
    public class PhotoViewModels
    {
        public PhotoCollection Photos { get; set; }
        public PlaceInfo[] PhotoGeo { get; set; }
    }
}