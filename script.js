import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Coletando os dados do usuário
        System.out.println("===== CONTROLE DE BATERIA =====");
        System.out.print("Nome: ");
        String nome = scanner.nextLine();
        
        System.out.print("Celular: ");
        String celular = scanner.nextLine();
        
        System.out.print("Bateria (%): ");
        int bateria = scanner.nextInt();
        
        System.out.println("===============================");
        
        // Saída dos dados
        System.out.println("Usuário: " + nome);
        System.out.println("Celular: " + celular);
        System.out.println("Bateria: " + bateria + "%");
        System.out.println();
        
        // Verificação do estado da bateria (if / else if / else) e validação
        if (bateria < 0 || bateria > 100) {
            System.out.println("Erro: Porcentagem inválida. A bateria deve estar entre 0% e 100%.");
        } else if (bateria <= 15) {
            System.out.println("Situação: 🔴 BATERIA CRÍTICA");
            System.out.println("⚠️ Recomendação: coloque o celular para carregar IMEDIATAMENTE.");
            
            // ⭐ Desafio Opcional: Verificação extra para bateria menor que 10%
            if (bateria < 10) {
                System.out.println("\n🚨 ATENÇÃO!\nBateria muito baixa!\nConecte o carregador imediatamente.");
            }
            
        } else if (bateria <= 30) {
            System.out.println("Situação: 🟠 BATERIA BAIXA");
            System.out.println("⚠️ Recomendação: coloque o celular para carregar.");
        } else if (bateria <= 70) {
            System.out.println("Situação: 🟡 BATERIA NORMAL");
            System.out.println("👍 Recomendação: uso liberado, mas fique atento.");
        } else { // Cobre de 71% a 100%
            System.out.println("Situação: 🟢 BATERIA CHEIA");
            System.out.println("🔋 Recomendação: celular pronto para uso prolongado.");
        }
        
        scanner.close();
    }
}
