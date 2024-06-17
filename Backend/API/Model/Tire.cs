using System;
using System.Collections.Generic;

namespace API.Model;

public partial class Tire
{
    public int Id { get; set; }

    public string? ImagePath { get; set; }

    public string? Name { get; set; }

    public string? Brand { get; set; }

    public string? Size { get; set; }

    public decimal? Price { get; set; }

    public string? Detail { get; set; }
    public string? tireType { get; set; }
    public string? seasonType { get; set; }
    public bool? onSale { get; set; }
}
