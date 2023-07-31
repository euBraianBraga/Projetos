package braian.com.example.ProjetoSpring.visoes;

public class LoginVisoes {

    private String email;

    public LoginVisoes(String email) {
        this.email = email;
    }

    public String getLogin() {
        return email;
    }
}
