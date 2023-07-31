package braian.com.example.ProjetoSpring.dominios;


import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "login")
public class LoginUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer idUser;

    @NotNull(message = "{login.not.null}")
    @Size(min = 5, max = 20, message = "{login.mix.max}")
    private String nome;

    @Email(message = "{email.not.null}")
    @Size(min = 14, max = 60, message = "{email.mix.max}")
    private String email;

    @NotNull(message = "{senha.not.null}")
    @Size(min = 8, max = 20, message = "{senha.mix.max}")
    private String senha;

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
