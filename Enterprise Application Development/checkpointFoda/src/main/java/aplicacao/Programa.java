package aplicacao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import dominio.Paciente;

public class Programa {
	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("exemploPaciente");
		EntityManager em = emf.createEntityManager();
		
		// INSERT
//		em.getTransaction().begin();
//		
//		
//		 Paciente paciente1 = new Paciente("Jorge de Nascimento Aragão", "28.545.436-5", "Vila da Paz", "733", "Três Andares", "(86) 2793-3100", "17/02/1964", "Mecânico", "ian-drumond89@inpa.gov.br");
//		 em.persist(paciente1);
//		 Paciente paciente2 = new Paciente("Sebastiana Carla Nascimento", "49.796.382-6", "Estrada Areia Branca", "170", "Eletronorte", "(69) 2784-5617", "07/01/1991", "Médico", "sebastiana-nascimento86@unicohost.com.br");
//		 em.persist(paciente2);
//		 Paciente paciente3 = new Paciente("Isabelle Melissa Costa", "42.097.929-3", "Rua E", "206", "Vila João Pessoa", "(51) 2922-7611", "13/01/1994", "Advogado", "isabelle.melissa.costa@hotrmail.com");
//		 em.persist(paciente3);
//		 Paciente paciente4 = new Paciente("Bryan Thales Sérgio Brito", "14.375.097-5", "Rua Martinópolis", "774", "Loteamento Costa Esmeralda", "(63) 2533-8519", "07/02/1979", "Estudante", "bryan-brito71@transporteveloz.com.br");
//		 em.persist(paciente4);
//		 Paciente paciente5 = new Paciente("Lucas Jorge Costa", "34.591.897-6", "Travessa Quatro de Janeiro", "734", "Vila Vicente Fialho", "(98) 3891-6353", "02/03/1997", "Professor", "lucas@gmail.com");
//		 em.persist(paciente5);	
//		
//		em.getTransaction().commit();

		// SELECT ID
//		Paciente pacienteSelect = em.find(Paciente.class, 4);
//		System.out.println(pacienteSelect);
		
		// DELETE
//		Paciente pacienteDelete = em.find(Paciente.class, 3);
//		em.getTransaction().begin();
//		em.remove(pacienteDelete);
//		em.getTransaction().commit();
		
		// SELECT ALL
		Query query = em.createQuery("SELECT v FROM Paciente v");
		List<Paciente> listaPaciente = query.getResultList();
		for (Paciente paciente : listaPaciente) {
			System.out.println(paciente);
		}
		
		emf.close();
		em.close();
	}
}
