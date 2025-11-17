import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // 서버 연결 테스트
        axios.get('/api/auth/test')
            .then(res => {
                setMessage(res.data);
                console.log('서버 연결 성공!', res.data);
            })
            .catch(err => {
                console.error('서버 연결 실패', err);
                setMessage('서버 연결 실패');
            });
    }, []);

    return (
        <div>
            <h1>React + Spring Boot</h1>
            <p>서버 메시지: {message}</p>
        </div>
    );
}

export default App;