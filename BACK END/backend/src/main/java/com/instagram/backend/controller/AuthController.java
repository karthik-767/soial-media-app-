package com.instagram.backend.controller;

import com.instagram.backend.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    // DTO class
    public static class LoginRequest {
        private String email;
        private String password;

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        // 🔴 TEMP validation (replace with DB later)
        if ("test@gmail.com".equals(request.getEmail())
                && "1234".equals(request.getPassword())) {

            System.out.println("Hai babai");
            String token = JwtUtil.generateToken(request.getEmail());
            return token;
        }

        throw new RuntimeException("Invalid credentials");
    }
}
