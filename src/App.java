import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Color;
import javax.swing.border.MatteBorder;

public class App extends JFrame {

	private JPanel contentPane;

	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					App frame = new App();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public App() {
		setUndecorated(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 1165, 665);
		contentPane = new JPanel();
		contentPane.setBackground(Color.WHITE);
		contentPane.setBorder(new MatteBorder(2, 2, 2, 2, (Color) new Color(60, 179, 113)));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JPanel jpNorte = new JPanel(null);
		jpNorte.setBounds(3, 3, 1160, 100);
		contentPane.add(jpNorte);
		
		JPanel jpCentro = new JPanel(null);
		jpCentro.setBounds(185, 104, 978, 559);
		contentPane.add(jpCentro);
		
		JPanel jpdashboard = new JPanel();
		jpdashboard.setBounds(3, 104, 184, 559);
		contentPane.add(jpdashboard);
	}
}
