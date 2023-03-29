package dominio;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Paciente implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String nome;
	
	@Column
	private String rg;
	
	@Column
	private String logradouro;
	
	@Column
	private String numero;
	
	@Column
	private String bairro;
	
	@Column
	private String telefone;
	
	@Column(name = "data_nasc")
	private String dataNascimento;
	
	@Column
	private String profissao;
	
	@Column
	private String email;
	
	public Paciente() {
		
	}
	

	public Paciente(String nome, String rg, String logradouro, String numero, String bairro, String telefone,
			String dataNascimento, String profissao, String email) {
		super();
		this.nome = nome;
		this.rg = rg;
		this.logradouro = logradouro;
		this.numero = numero;
		this.bairro = bairro;
		this.telefone = telefone;
		this.dataNascimento = dataNascimento;
		this.profissao = profissao;
		this.email = email;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getRg() {
		return rg;
	}
	public void setRg(String rg) {
		this.rg = rg;
	}
	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getProfissao() {
		return profissao;
	}
	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	@Override
	public String toString() {
		return "Paciente [id=" + id + ", nome=" + nome + ", rg=" + rg + ", logradouro=" + logradouro + ", numero="
				+ numero + ", bairro=" + bairro + ", telefone=" + telefone + ", dataNascimento=" + dataNascimento
				+ ", profissao=" + profissao + ", email=" + email + "]";
	}
}
