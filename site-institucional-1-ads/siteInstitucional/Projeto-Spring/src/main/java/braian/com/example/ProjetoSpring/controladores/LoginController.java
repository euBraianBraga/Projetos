package braian.com.example.ProjetoSpring.controladores;

import braian.com.example.ProjetoSpring.dominios.LoginUsuario;
import braian.com.example.ProjetoSpring.repositorios.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.NotContextException;
import javax.validation.Valid;
import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/login")
public class LoginController {


    @Autowired
    LoginRepository repository;

    @CrossOrigin
    @PostMapping("/logar")
    public ResponseEntity userLogin(@PathParam("email") String email, @PathParam("senha") String senha){
        LoginUsuario loginUsuarioOptional = repository.findByEmailAndSenha(email,senha);
        if (email.equals(loginUsuarioOptional.getEmail()) && senha.equals(loginUsuarioOptional.getSenha())){
            return ResponseEntity.ok("Usuario Valido");
        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin
    @GetMapping()
    public ResponseEntity getUsuarios() {
        if (repository.findAll().isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(repository.findAll());
        }

    }
    @CrossOrigin
    @PutMapping("/{idUser}")
    public ResponseEntity putUser(
            @Valid
            @PathVariable int idUser,
            @RequestBody LoginUsuario alteraLogin) {
        if (repository.existsById(idUser)) {
            alteraLogin.setIdUser(idUser);
            repository.save(alteraLogin);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin
    @PostMapping()
    public ResponseEntity postUser(@Valid @RequestBody LoginUsuario novoLoginUsuario) {
        repository.save(novoLoginUsuario);
        return ResponseEntity.created(null).build();
    }
    @CrossOrigin
    @DeleteMapping("/{idUser}")
    public ResponseEntity deleteUser(@PathVariable int idUser) {
        if (repository.existsById(idUser)) {
            repository.deleteById(idUser);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    @GetMapping("/{userLogin}")
//    public ResponseEntity byLogin(@PathVariable String userLogin) {
//        List<LoginUsuario> usuarioOptional = repository.findAllLogin(userLogin);
//        if (!usuarioOptional.isEmpty()) {
//            return ResponseEntity.ok(usuarioOptional);
//        } else {
//            return ResponseEntity.noContent().build();
//
//        }
//    }
@CrossOrigin
    @GetMapping("/{userEmail}")
    public ResponseEntity userLoginAll(@PathVariable String userEmail) throws NotContextException {
        if (userEmail == null){
            List<LoginUsuario> login = repository.findAll();

            if (login.isEmpty()){
                throw  new NotContextException("Não há Usuarios Cadastrados");
            }

            return ResponseEntity.ok(login);
        }

        List<LoginUsuario> loginFiltrados = repository.findAllByEmail(userEmail);

        if (loginFiltrados.isEmpty()){
            throw new NotContextException("Não há Usuarios cadastrados com esse nome: " + userEmail);
        }

        return ResponseEntity.ok(loginFiltrados);
    }
}
