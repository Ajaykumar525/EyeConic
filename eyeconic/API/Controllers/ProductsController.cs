using Infrastructure.Data;
using Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interfaces;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    //deriving from ControllerBase
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _repo;

        public ProductsController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        //making method asynchronous
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            //when we make use of async we can use await
            var products = await _repo.GetProductAsync();

            return Ok(products);
        }

        //it takes id as root parameter
        [HttpGet("{id}")]
        //using asynchronouse method to find the product in database
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _repo.GetProductByIdAsync(id);
        }
    }
}
