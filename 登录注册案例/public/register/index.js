const username = document.querySelector('input[name=username]');
const userSpan = document.querySelector('#pid-userSpan');
const password = document.querySelector('input[name=password]');
const pwdSpan = document.querySelector('#pid-pwdSpan');
const repassword = document.querySelector('input[name=repassword]');
const repwdSpan = document.querySelector('#pid-repwdSpan');
const registerBtn = document.querySelector('input[type=submit]');

// 注册失去焦点事件 (用户输入框和密码输入创)
username.oninput = function(e){
  // 记得去下前后空格
  const value = username.value.trim();
  const reg = /^\w{8,16}$/;
  // 判断如果为空
  if(!value){
    userSpan.textContent = '请输入用户名';
    userSpan.style.color = 'red';
    return;
  }
  if(reg.test(value)){
    userSpan.textContent = '用户名可用';
    userSpan.style.color = 'green';
  }else{
    userSpan.textContent = '用户名不可用,请重新输入';
    userSpan.style.color = 'red';
  }
}

password.oninput = function(e){
  const value = password.value.trim();
  const reg = /^[A-Z]\w{7,15}$/;
  // 判断如果为空
  if(!value){
    pwdSpan.textContent = '请输入密码';
    pwdSpan.style.color = 'red';
    return;
  }
  if(reg.test(value)){
    pwdSpan.textContent = '密码可用';
    pwdSpan.style.color = 'green';
  }else{
    pwdSpan.textContent = '密码不可用,请重新输入';
    pwdSpan.style.color = 'red';
  }
}

repassword.oninput = function(e){
  const value = repassword.value.trim();
  // 判断如果为空
  if(!value){
    repwdSpan.textContent = '请输入确认密码';
    repwdSpan.style.color = 'red';
    return;
  }
  if(value === password.value.trim()){
    repwdSpan.textContent = '确认密码无误';
    repwdSpan.style.color = 'green';
  }else{
    repwdSpan.textContent = '确认密码有误,请重新输入';
    repwdSpan.style.color = 'red';
  }
}

registerBtn.onclick = function(e){
  // 如果userSpan和pwdSpan的颜色属性没有, 则直接return,并阻止提交
  if(!userSpan.style.color || !pwdSpan.style.color || !repwdSpan.style.color) return e.preventDefault();
  // 如果userSpan和pwdSpan的颜色不全是green, 则阻止提交
  if(!(userSpan.style.color === 'green' && pwdSpan.style.color === 'green') && repwdSpan.style.color === 'green'){
    e.preventDefault();
  }
}