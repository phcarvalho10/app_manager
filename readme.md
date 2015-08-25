----------------------------------
Exemplo de sequência de casos de uso
----------------------------------
1. Usuário cadastra cliente em Clients.
2. Usuário cadastra aplicação em Applications.
3. Usuário cadastra versão em Versions.
4. Usuário cadastra um ou mais arquivos em Files.
5. Usuário atribui um ou mais arquivos para a versão em Versions -> Assign File.
6. Usuário libera a versão em Versions -> Relase.
7. Usuário atribui aplicação com versão liberada para um cliente em Clients -> Assign Application.

----------------------------------
Informações
----------------------------------
1. Sistema totalmente funcional com todos os requisitos implementados com todas as tecnologias essenciais.
2. URL base: "%server%/manager/public/#/main".
3. Tabelas: Definidas nas Laravel Migrates e prontas para o migrate.
4. Há configurações da base de dados de desenvolvimento no arquivo "\manager\.env".
5. Versão do Laravel: 5.1.
6. View estruturada no diretório "\public\View". Com exceção da SPA, "index.php", que segue o padrão do framework, assim como os Model e os Controller.
7. Os arquivos de upload são armazenados no diretório "manager\upload"

----------------------------------
Contexto
----------------------------------
A fábrica de Software XZY necessita atualizar constantemente os aplicativos de vários de
seus clientes. Pensando em otimizar esse processo, a empresa deseja construir um sistema
para gerenciar as versões instaladas dos aplicativos nos seus clientes.

----------------------------------
Requisitos
----------------------------------
Sistema deve ser capaz de realizar cadastro, atualização, remoção e inserção
(CRUD) de aplicações, clientes, versões e arquivos;
Cada aplicação pode conter várias versões;
Cada versão pode conter vários arquivos;
Cada versão deve conter ao menos um arquivo para ser liberada;
Cada cliente pode ter uma versão específica da aplicação;
Deve ser possível acessar o sistema de gerenciamento pela internet;
Código fonte deve estar no Github.

----------------------------------
Exemplo
----------------------------------
Temos uma aplicação chamada X que é utilizada por três clientes. O cliente A utiliza a
versão 1.2 da aplicação e os clientes B e C utilizam a versão 2.0 que é igual para os
mesmos. A versão 1.2 contém os arquivos 1.zip e 2.zip e a versão 2.0 contém somente o
arquivo 3.zip.

----------------------------------
Tecnologias essenciais
----------------------------------
AngularJS para o Front-end;
Laravel para Back-end (RESTful);
PostgreSQL;
HTML5 e CSS3.
