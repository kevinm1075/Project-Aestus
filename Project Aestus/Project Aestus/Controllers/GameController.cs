using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FlickrNet;
using Project_Aestus.Models;

namespace Project_Aestus.Controllers
{
    public class GameController : Controller
    {
        // GET: Game
        public ActionResult Index()
        {
            return View();
            
        }

        public ActionResult Play()
        {
            Flickr flickr = new Flickr("105b47ca4766080c19c35722a86fca79");

            PhotoSearchOptions options = new PhotoSearchOptions {
                HasGeo = true,
                ContentType = ContentTypeSearch.PhotosOnly,
                InGallery = true,
                Accuracy = GeoAccuracy.Level7,
                MinTakenDate = new DateTime(2015, 1, 1)
            };

            PhotoCollection photoCollection = flickr.PhotosSearch(options);
            PlaceInfo[] photoPlaceInfo = new PlaceInfo[photoCollection.Count];
            
            for(int i = 0; i < 30; i++)
            {
                string photoId = photoCollection[i].PhotoId;
                PlaceInfo currentInfo = flickr.PhotosGeoGetLocation(photoId);
                photoPlaceInfo[i] = currentInfo;
            }

            var retPhotos = new PhotoViewModels() { Photos = photoCollection, PhotoGeo = photoPlaceInfo};
            return View(retPhotos);
        }
    }
}