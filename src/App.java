import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Color;
import javax.swing.border.MatteBorder;
import javax.swing.JButton;
import java.awt.Cursor;
import javax.swing.ImageIcon;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.event.MouseMotionAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseAdapter;
import javax.swing.JLabel;
import java.awt.Font;
import javax.swing.SwingConstants;

public class App extends JFrame {

	private JPanel contentPane;
	protected int x, y;
	
	
	public static void main(String[] args) {
		App frame = new App();
		frame.setLocationRelativeTo(null);
		frame.setVisible(true);			
	}

	
	public App() {
		setUndecorated(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 1165, 665);
		contentPane = new JPanel();
		contentPane.setBackground(Color.WHITE);
		contentPane.setBorder(new MatteBorder(2, 2, 2, 2, (Color) new Color(60, 179, 113)));
		contentPane.setLayout(null);
		setContentPane(contentPane);
		
		
		/*PANEL DEL CENTRO, EN ESTE IRA PRACTOCAMENTE TODO, ESTE ES EL PANEL QUE ESTA SIEMPRE EN MOVIMIENTO, OSEA CAMBIA CRECUENTEMENTE.*/
		
		JPanel jpCentro = new JPanel(null);
		jpCentro.setBounds(312, 104, 851, 559);
		contentPane.add(jpCentro);
		
		/**********************************************************************/

		
		/* PANEL DE DASHBOARD ENCARGADO DE MANTENER LOS ICONOS Y FUNCIONES PRINCIPALES DEL APP*/
		
		JPanel jpdashboard = new JPanel();
		jpdashboard.setBackground(new Color(0,150,36));
		jpdashboard.setBounds(2, 2, 309, 661);
		contentPane.add(jpdashboard);
		jpdashboard.setLayout(null);
		
			JButton jbexit = new JButton("");
			jbexit.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent arg0) {
					try {
						dispose();
						Thread.sleep(1500);
					} catch (Exception e) {}
					System.exit(0);
				}
			});
			
			JLabel jlLogo = new JLabel("");
			jlLogo.setIcon(new ImageIcon(App.class.getResource("/assets/log_ajustado.png")));
			jlLogo.setBounds(10, 10, 62, 62);
			jpdashboard.add(jlLogo);
			jbexit.setToolTipText("Cerrar app");
			jbexit.setIcon(new ImageIcon(App.class.getResource("/assets/exit.png")));
			jbexit.setFocusable(false);
			jbexit.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
			jbexit.setBorderPainted(false);
			jbexit.setContentAreaFilled(false);
			jbexit.setBorder(null);
			jbexit.setBounds(10, 608, 43, 42);
			jpdashboard.add(jbexit);
			
		/**********************************************************************/

			
		/*PANEL DEL NORTE, TIENE DRAWNER ON SCREEN Y ES DONDE IRA LA INFO DE USUARIO*/
			
		JPanel jpHeader = new JPanel(null);								
		jpHeader.addMouseListener(new MouseAdapter() {
			@Override
		public void mousePressed(MouseEvent a) {
				x=a.getX(); y=a.getY();
			}
		});
		jpHeader.addMouseMotionListener(new MouseMotionAdapter() {
			@Override
			public void mouseDragged(MouseEvent a) {
				int xx=a.getXOnScreen(), yy=a.getYOnScreen();
				setLocation(xx-x,yy-y);
			}
		});
		jpHeader.setBounds(2, 3, 1161, 100);
		contentPane.add(jpHeader);
		
		JLabel jlNameUser = new JLabel("AB");
		jlNameUser.setToolTipText("Informacion de usuario");
		jlNameUser.setForeground(new Color(169, 169, 169));
		jlNameUser.setHorizontalAlignment(SwingConstants.CENTER);
		jlNameUser.setFont(new Font("Arial", Font.BOLD, 20));
		jlNameUser.setFocusable(false);
		jlNameUser.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
		jlNameUser.setBounds(1079, 33, 62, 34);
		jpHeader.add(jlNameUser);
		
		JButton jbinfoUser = new JButton("");
		jbinfoUser.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
		jbinfoUser.setIcon(new ImageIcon(App.class.getResource("/assets/circle.png")));
		jbinfoUser.setToolTipText("Informacion de usuario");
		jbinfoUser.setFocusable(false);
		jbinfoUser.setContentAreaFilled(false);
		jbinfoUser.setBorderPainted(false);
		jbinfoUser.setBorder(null);
		jbinfoUser.setBounds(1080, 20, 62, 61);
		jpHeader.add(jbinfoUser);
			
			/**********************************************************************/
			
	}
}
