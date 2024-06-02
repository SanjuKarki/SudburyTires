using API.Model;
using API.Repository;
using Moq;
using NUnit.Framework;

[TestFixture]
public class AuthServiceTests
{
    [Test]
    public void ValidateCredentials_ValidUser_ReturnsTrue()
    {
        // Arrange
        var userRepositoryMock = new Mock<IUserRepository>();
        var authService = new AuthService(userRepositoryMock.Object);
        
        var username = "sanju";
        var password = "12345";

        // Hash the password and generate salt
        authService.CreatePasswordHash(password, out byte[] hashedPassword, out byte[] salt);

        var user = new User
        {
            Username = username,
            PasswordHash = hashedPassword,
            PasswordSalt = salt,
        };

        userRepositoryMock.Setup(repo => repo.GetUserByUsername("sanju")).Returns(user);

        // Act
        var result = authService.ValidateCredentials("sanju", "12345");

        // Assert
        result.Equals(true);
    }

    [Test]
    public void ValidateCredentials_InvalidUser_ReturnsFalse()
    {
        // Arrange
        var userRepositoryMock = new Mock<IUserRepository>();
        var authService = new AuthService(userRepositoryMock.Object);

        // No need to setup GetUserByUsername for an invalid user

        // Act
        var result = authService.ValidateCredentials("nonexistentuser", "somepassword");

        // Assert
        result.Equals(false);
    }
}