import { FC } from 'react'
import { Layout, Menu } from 'antd'
import './PublicationsPerformed.less'
import { PublicationsDropdown } from '../../../../types'

const { SubMenu } = Menu

const publicationsPerformedDropdowns: PublicationsDropdown[] = [
  {
    title:
      'Evaluation of interface properties of carbon fiber/resin using the full atomistic model considering the electric charge state',
    paragraphs: [
      'Shohei Kasahara, Jun Koyanagi, Kazuki Mori & Makoto Yabe',
      'Tokyo University of Science, ITOCHU Techno-solutions,',
      'Evaluation of interface strength is important in composite material design such as carbon fiber reinforced plastic. Molecular simulation, which considers aspects such as chemical structure, can be used to evaluate the composite interface strength. Therefore, in this study, the interface energies between graphene, considering the electric charge state, and resin (TriA-X polyimide, DGEBA, triethylenetetramine, vinyl ester, and PA6) were evaluated via molecular dynamics simulation. First, the interface energy and experimentally obtained interface strength were compared. Subsequently, the coefficient of determination R2 was calculated using linear approximations from the interface energy and interface strength. In addition, the correlation coefficient was calculated and showed a high correlation. Based on this data, it was conjectured that a relationship exists between the interface strength and interface energy. Furthermore, the validity of the relationship magnitude between the experimentally obtained interface strength and the interface energy obtained via simulation was evaluated. Moreover, considering graphene oxidation, the interface energies between the resin and three forms of graphene (functionalized with OH, COOH, and O groups) were obtained, and the effect of various oxidation surface treatments of graphene on their corresponding interface strengths was investigated.',
    ],
    tags: ['2020', 'Advanced Composite Materials'],
    image: '',
  },
  {
    title: 'Electronic properties of binary compounds with high fidelity and high throughput',
    paragraphs: [
      'Protik Das and Timur Bazhirov',
      'Exabyte Inc.',
      'We present example applications of an approach to high-throughput first-principles calculations of the electronic properties of materials implemented within the Exabyte.io platform[1, 2]. We deploy computational techniques based on the Density Functional Theory with both Generalized Gradient Approximation (GGA) and Hybrid Screened Exchange (HSE) in order to extract the electronic band gaps and band structures for a set of 775 binary compounds. We find that for HSE, the average relative error fits within 22%, whereas for GGA it is 49%. We find the average calculation time on an up-to-date server centrally available from a public cloud provider to fit within 1.2 and 36 hours for GGA and HSE, respectively. The results and the associated data, including the materials and simulation workflows, are standardized and made available online in an accessible, repeatable and extensible setting.',
    ],
    tags: ['2019', 'Journal of Physics', 'Team Exabyte.io'],
    image: '',
  },
  {
    title: 'Computing RPA Adsorption Enthalpies by Machine Learning Thermodynamic Perturbation Theory',
    paragraphs: [
      'Bilal Chehaibou, Michael Badawi, Tomáš Bučko, Timur Bazhirov, Dario Rocca',
      'Université de Lorraine, Comenius University in Bratislava, Exabyte Inc.',
      'Correlated quantum-chemical methods for condensed matter systems, such as the random phase approximation (RPA), hold the promise of reaching a level of accuracy much higher than that of conventional density functional theory approaches. However, the high computational cost of such methods hinders their broad applicability, in particular for finite-temperature molecular dynamics simulations. We propose a method that couples machine learning techniques with thermodynamic perturbation theory to estimate finite-temperature properties using correlated approximations. We apply this approach to compute the enthalpies of adsorption in zeolites and show that reliable estimates can be obtained by training a machine learning model with as few as 10 RPA energies. This approach paves the way to the broader use of computationally expensive quantum-chemical methods to predict the finite-temperature properties of condensed matter systems.',
    ],
    tags: ['2019', 'Journal of Chemical Theory and Computation'],
    image: '',
  },
  {
    title: 'Tensile Test Analysis of Carbon Fiber Composite Material by Molecular Dynamics Simulation',
    paragraphs: [
      'Kazuki Mori, Nobuhiko Matsumoto, Makoto Yabe, Yuji Kohno',
      'ITOCHU Techno-solutions, MITSUBISHI GAS CHEMICAL COMPANY, Yokohama National University',
      'In this study, the authors investigate the tensile strength at a carbon fiber/epoxy resin interface using molecular dynamics (MD) simulations. The simulated tension speed and strength were initially estimated, and a realistic tension speed was subsequently selected. The tensile strength calculated using the simulations was in good agreement with the experimental data. Based on the present study and our previous work, the factors contributing to the tensile strength of composite materials were investigated and analyzed. The surface energy between the graphene sheet and resin as well as the molecular structure of the resin in the vicinity of graphene was shown to significantly affect the tensile strength. In addition, the applicability of MD simulation as a useful tool for the prediction and analysis of composite materials was demonstrated. This work used graphene sheets as carbon fiber because it is difficult to express the real carbon fiber for simulation model.',
    ],
    tags: ['2019', 'Advanced Composite Materials'],
    image: '',
  },
  {
    title: 'Evaluation of the mechanical properties of carbon fiber/polymer resin interfaces by molecular simulation',
    paragraphs: [
      'Jun Koyanagi, Norie Itano, Michihiro Yamamoto, Kazuki Mori, Yuichi Ishida & Timur Bazhirov',
      'Tokyo University of Science, ITOCHU Techno-solutions, Japan Aerospace Exploration Agency, Exabyte Inc.,',
      'Herein, we evaluate the mechanical properties of carbon fiber/polymer interfaces using three types of specimens: carbon fiber/vinyl ester resin, carbon fiber/epoxy resin, and carbon fiber/polyimide resin. Microbonding tests were performed and the fiber load at interfacial debonding was obtained. By performing finite element analysis, the true interfacial strengths were determined. The strength values followed the order: polyimide > epoxy > vinyl ester for the specimens tested. Molecular modeling was also performed for these specimens. Three stacked graphene layers were used to represent the carbon fiber surface and the interfacial energy was determined. The interfacial energy of the three systems followed the same order as the strength values. The molecular simulations allowed for a qualitative discussion of the material properties. In addition, an interfacial debonding simulation was per- formed, however the resin part failed instead of the interface, indicating that we evaluated the resin strength but not the interfacial strength. For the quantitative evaluation of interfacial debonding strength, further studies are necessary.',
    ],
    tags: ['2019', 'Advanced Composite Materials'],
    image: '',
  },
  {
    title: 'Fast and accessible first-principles calculations of vibrational properties of materials',
    paragraphs: [
      'Timur Bazhirov',
      'Exabyte Inc.',
      'We present example applications of an approach to first-principles calculations of vibrational properties of materials implemented within the Exabyte.io platform. We deploy models based on the Density Functional Perturbation Theory to extract the phonon dispersion relations and densities of states for an example set of 35 samples and find the results to be in agreement with prior similar calculations. We construct modeling workflows that are both accessible, accurate, and efficient with respect to the human time involved. This is achieved through efficient parallelization of the tasks for the individual vibrational modes. We report achieved speedups in the 10-100 range, approximately, and maximum attainable speedups in the 30-300 range, correspondingly. We analyze the execution times on the current up-to-date computational infrastructure centrally available from a public cloud provider. Results and all associated data, including the materials and simulation workflows, are made available online in an accessible, repeatable and extensible setting.',
    ],
    tags: ['2018', 'Arxiv.org', 'Team Exabyte.io'],
    image: '',
  },
  {
    title: 'Accessible computational materials design with high fidelity and high throughput',
    paragraphs: [
      'Protik Das, Mohammad Mohammadi, Timur Bazhirov',
      'Exabyte Inc.',
      'Despite multiple successful applications of high-throughput computational materials design from first principles, there is a number of factors that inhibit its future adoption. Of particular importance are limited ability to provide high fidelity in a reliable manner and limited accessibility to non-expert users. We present example applications of a novel approach, where high-fidelity first-principles simulation techniques, Density Functional Theory with Hybrid Screened Exchange (HSE) and GW approximation, are standardized and made available online in an accessible and repeatable setting. We apply this approach to extract electronic band gaps and band structures for a diverse set of 71 materials ranging from pure elements to III-V and II-VI compounds, ternary oxides and alloys. We find that for HSE and G0W0, the average relative error fits within 20%, whereas for conventional Generalized Gradient Approximation the error is 55%. For HSE we find the average calculation time on an up-to-date server centrally available from a public cloud provider to fit within 48 hours. This work provides a cost-effective, accessible and repeatable practical recipe for performing high-fidelity first-principles calculations of electronic materials in a high-throughput manner.',
    ],
    tags: ['2018', 'Arxiv.org', 'Team Exabyte.io'],
    image: '',
  },
  {
    title: 'Prediction of new metastable HfO2 phases: toward understanding ferro- and antiferroelectric films',
    paragraphs: [
      'Sergey Barabash',
      'Intermolecular, Inc.',
      'From first principles, we predict several yet-unknown, low-energy, dynamically stable phases of HfO2 . One of the predicted metastable phases has a finite ferroelectric polarization and could be potentially responsible for the ferroelectric and/or antiferroelectric behavior recently reported in thin (Hf,Zr)O2 -based films. Other phases predicted here may potentially form as competing non-ferroelectric phases in thin films, and the possibility of their formation should be taken into account during analysis of experimental thin-film characterization data. These predictions are made possible by an explicit enumeration approach, designed for the case at hand. Our approach outperforms existing theoretical structure prediction methods, including evolutionary algorithms, which have been previously applied to the same problem yet have not identified most of the possible metastable phases found in this study. This suggests that structure enumeration techniques may be indispensable for practical structure prediction problems that seek to identify all low-energy metastable phases rather the single stable (lowest energy) phase.',
    ],
    tags: ['2017', 'Journal of Computational Electronics'],
    image: '',
  },
]

const PublicationsPerformed: FC = () => {
  return (
    <Layout className='publications-performed'>
      <div className='title'>Publications performed on Exabyte.io</div>
      <Menu mode='inline'>
        {publicationsPerformedDropdowns.map((dropdown, index) => (
          <SubMenu key={index} title={dropdown.title}>
            {dropdown.paragraphs.map((paragraph, paraIndex) => (
              <Menu.Item key={`${index}${paraIndex}`}>{paragraph}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Layout>
  )
}

export { PublicationsPerformed }
