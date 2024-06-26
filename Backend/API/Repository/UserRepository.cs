﻿using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.Repository
{
    // Interface defining the contract for user-related data operations
    public interface IUserRepository
    {
        User GetUserByUsername(string username);
        void AddUser(User user);
    }

    public class UserRepository : IUserRepository
    {
        private readonly SudburyTiresContext _dbContext;

        public UserRepository(SudburyTiresContext dbContext)
        {
            _dbContext = dbContext;
        }

        public User GetUserByUsername(string username)
        {
             return _dbContext.Users.FirstOrDefault(u => u.Username == username);
        }

        public void AddUser(User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
        }
    }
}
