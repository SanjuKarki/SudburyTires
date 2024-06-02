using System;
using System.Collections.Generic;

namespace API.Model;

public partial class User
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public byte[]? PasswordHash { get; set; }

    public byte[]? PasswordSalt { get; set; }
}
