package braian.com.example.ProjetoSpring.repositorios;

import braian.com.example.ProjetoSpring.dominios.LoginUsuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LoginRepository extends JpaRepository<LoginUsuario, Integer> {


    List<LoginUsuario> findAllByEmail(String email);

    LoginUsuario  findByEmailAndSenha(String email, String senha);
}
