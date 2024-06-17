using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API.Model;

public partial class SudburyTiresContext : DbContext
{
    public SudburyTiresContext()
    {
    }

    public SudburyTiresContext(DbContextOptions<SudburyTiresContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Tire> Tires { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-QHSV13C;Initial Catalog=sudbury_tires;TrustServerCertificate=True; Integrated Security = True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Tire>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tires__3213E83FA7C6B232");

            entity.ToTable("tires");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Brand)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("brand");
            entity.Property(e => e.Detail)
                .HasColumnType("text")
                .HasColumnName("detail");
            entity.Property(e => e.ImagePath)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("imagePath");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("price");
            entity.Property(e => e.Size)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("size");
            entity.Property(e => e.tireType)
                .HasColumnType("text")
                .HasColumnName("tireType");
            entity.Property(e => e.seasonType)
                .HasColumnType("text")
                .HasColumnName("seasonType");
            entity.Property(e => e.onSale)
               .HasColumnName("onSale");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4C5D9F7689");

            entity.Property(e => e.PasswordHash)
                .HasMaxLength(64)
                .IsFixedLength();
            entity.Property(e => e.PasswordSalt)
                .HasMaxLength(128)
                .IsFixedLength();
            entity.Property(e => e.Username)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
