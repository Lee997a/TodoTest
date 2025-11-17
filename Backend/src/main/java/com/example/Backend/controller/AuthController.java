package com.example.Backend.controller;

import com.example.Backend.SignupRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        // 회원가입 로직
        Map<String, Object> response = new HashMap<>();
        response.put("message", "회원가입 성공!");
        response.put("username", request.getUsername());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok("서버 연결 성공!");
    }
}