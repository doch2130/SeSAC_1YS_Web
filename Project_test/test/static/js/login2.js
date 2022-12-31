function login() {
    const form = document.getElementById('login_form');
    axios({
        method: 'post',
        url: '/login',
        data: {
            id: form.id.value,
            pw: form.pw.value
        }
    })

    .then((response) => {
        if(response.data) {
            form.submit();
        } else {
            form.reset();
            alert('아이디 또는 패스워드가 일치하지 않습니다.');
        }
    });
}