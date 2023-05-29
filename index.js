document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Aqui você pode fazer uma solicitação AJAX para validar as credenciais no servidor.
    // Por exemplo, usando a função fetch() ou XMLHttpRequest.
  
    // Após a validação, você pode exibir o conteúdo do painel de administração.
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  });
  