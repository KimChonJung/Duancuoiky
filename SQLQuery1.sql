-- 1. Tạo Database chuyên nghiệp
CREATE DATABASE SecureShop_FinalProject;
GO
USE SecureShop_FinalProject;
GO

-- 2. Bảng Users (Người dùng & Ngân hàng)
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    FullName NVARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,      -- Không cho phép trùng Email
    PasswordHash VARCHAR(MAX) NOT NULL,       -- Security: Lưu mật khẩu đã mã hóa
    PhoneNumber VARCHAR(15) NOT NULL,
    HomeAddress NVARCHAR(255),
    BankName NVARCHAR(100),                   -- Tên ngân hàng
    BankAccountNumber VARCHAR(20),            -- Số tài khoản
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- 3. Bảng Products (Sản phẩm)
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(200) NOT NULL,
    Price DECIMAL(18, 2) NOT NULL,
    StockQuantity INT DEFAULT 0
);

-- 4. Bảng Orders (Đơn hàng - Trọng tâm xử lý > 500k)
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    TotalAmount DECIMAL(18, 2) NOT NULL,
    IsVerified BIT DEFAULT 0,                 -- 0: Chờ OTP, 1: Đã xác thực thành công
    OrderStatus NVARCHAR(50) DEFAULT N'Pending OTP',
    OrderDate DATETIME DEFAULT GETDATE()
);

-- 5. Bảng OTP_Logs (Nhật ký bảo mật)
CREATE TABLE OTP_Logs (
    LogID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    OrderID INT FOREIGN KEY REFERENCES Orders(OrderID),
    OTPCode VARCHAR(6) NOT NULL,
    ExpirationTime DATETIME NOT NULL,         -- Thời gian hết hạn mã (thường là 5 phút)
    IsUsed BIT DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETDATE()
);