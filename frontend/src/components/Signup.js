import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // proxy 설정으로 /api는 자동으로 localhost:8080으로 연결
            const response = await axios.post('/api/auth/signup', formData);
            console.log('응답:', response.data);
            alert(response.data.message);
        } catch (error) {
            console.error('에러:', error);
            alert('회원가입 실패');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="username"
                placeholder="아이디" 
                onChange={handleChange}
                required 
            />
            <input 
                name="password"
                type="password"
                placeholder="비밀번호" 
                onChange={handleChange}
                required 
            />
            <input 
                name="email"
                type="email"
                placeholder="이메일" 
                onChange={handleChange}
                required 
            />
            <button type="submit">회원가입</button>
        </form>
    );
}

export default Signup;