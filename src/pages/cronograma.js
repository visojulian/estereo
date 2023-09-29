/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from 'components/layout'
import SEO from 'components/seo'
import { StickyProvider } from 'contexts/app/app.provider'
import React from 'react'
import { ThemeProvider, Container, Box, Heading } from 'theme-ui'
import theme from 'theme';

export default function Cronograma() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Estéreo: Festival de Podcast" />
          <Container>
            <Box sx={{ pt: '8em' }}>
              <Heading as='h1' sx={{ fontSize: '2em', textAlign: 'center', fontFamily: 'Kanit', mb: 5 }}>CRONOGRAMA</Heading>
              <Heading as='h1' sx={{ fontSize: '3em', textAlign: 'center', fontFamily: 'Kanit', mb: 2 }}>VIERNES</Heading>
              <hr />
              <table sx={{ ...styles.table, ...styles.viernes }}>
                <thead>
                  <tr>
                    <th colSpan={2}>Biblioteca Argentina</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10:00 hs <br /> Periodismo especializado en Podcast</td>
                    <td>¿Existe un periodismo especializado en podcast en Argentina? En esta charla, Pablo Fisher de Escucha Podcast, Malena Sánchez de Infobae y Morena Pardo de La Capital cuentan qué lugar ocupa el podcast en sus medios, cuál es el rol del periodismo en esta industria y cómo imaginan el futuro.</td>
                  </tr>
                  <tr>
                    <td>10:30 hs <br /> El podcast en la escuela</td>
                    <td>¿Qué rol puede ocupar el podcast en los entornos escolares? En esta charla, docentes de escuelas secundarias intercambian experiencias en las aulas y en internet sobre el uso del podcast como herramienta educativa.</td>
                  </tr>
                  <tr>
                    <td>11:15 hs <br /> El podcast en las universidades</td>
                    <td>¿Cómo están utilizando al podcast las universidades? En esta charla, productores de podcast que trabajan en universidades de todo el país discuten sobre las distintas estrategias que las instituciones están utilizando para la construcción del conocimiento y la experimentación con nuevas narrativas.</td>
                  </tr>
                  <tr>
                    <td>12:00 hs</td>
                    <td>Inauguración de la segunda edición de Estéreo: Festival argentino de Podcast.</td>
                  </tr>
                  <tr>
                    <td>14:00 hs <br /> Presentación del Circuito Iberoamericano de Festivales de Podcast.</td>
                    <td>El Circuito Iberoamericano de Festivales de Podcast incluye eventos de España, Argentina, Colombia, Chile y Uruguay. En esta mesa, con presencia de representantes de Estéreo y Podcast Fest (Chile) más la participación por videollamada de los demás integrantes del Circuito, se conversarán los motivos de la creación de CIFESPOD y sus planes a futuro.</td>
                  </tr>
                  <tr>
                    <td>14:30 hs <br /> El podcast en los medios</td>
                    <td>¿Qué medios han incorporado al podcast a sus sistemas de producción y cómo lo hacen? En esta mesa, productores de medios nacionales discuten el lugar que tiene y puede tener el podcast en la radio y en los portales de noticias. ¿Qué estrategias se están utilizando? ¿Cómo conviven con la vieja guardia periodista? ¿Hay posibilidades de producir proyectos largos en medios tan acelerados?</td>
                  </tr>
                  <tr>
                    <td>15:00 hs <br /> El futuro del podcast de ficción en Latinoamérica</td>
                    <td>¿Tiene futuro el podcast de ficción en nuestro continente? En esta mesa, Maru Lombardo (Studio 80) e Ignacio Lara Saldaña (Emisor Podcasting) conversan acerca de los desafíos de producir podcasts de ficción. El trabajo con guionistas y actores, los costos de producción y marketing.</td>
                  </tr>
                  <tr>
                    <td>15:30 hs <br /> ¿Cómo financiar un podcast?</td>
                    <td>¿Cuáles son los caminos para conseguir el dinero necesario para producir un podcast? En esta mesa, referentes del podcast de Argentina y Chile, explican sus modelos de financiación y discuten sobre las dificultades y oportunidades que han encontrado.</td>
                  </tr>
                  <tr>
                    <td>16:15 hs <br /> Lo que hacemos en las sombras (el rol de la producción)</td>
                    <td>¿Qué hacen las y los productores? En esta mesa, cuatro profesionales multifacéticos deconstruyen la infinidad de detalles que conlleva la producción de un podcast, desde la conformación de los equipos de trabajo al armado de cronogramas, presupuestos y mil tareas invisibles más.</td>
                  </tr>
                  <tr>
                    <td>17:00 hs <br /> Estreno: Quiero ser científica.</td>
                    <td>En este podcast en formato audioblog, cuatro chicas a punto de terminar la secundaria visitan laboratorios, charlan con científicos, aprenden y se divierten.</td>
                  </tr>
                  <tr>
                    <td>17:30 hs <br /> Distribución y comercialización: lo menos sexy del podcast</td>
                    <td>Ignacio Lara Saldaña, director de Emisor Podcasting (Chile) trae su clase magistral sobre el aspecto menos divertido, menos sexy y que nadie piensa a la hora de crear un podcast. Y es lo que pocos piensan al momento de decidir hacer un podcast.</td>
                  </tr>
                </tbody>

              </table>

              <table sx={{ ...styles.table, ...styles.viernes }}>
                <thead>
                  <tr>
                    <th colSpan={2}>Galpón 11</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>17:30 hs</td>
                    <td> Esperame en ésta</td>
                  </tr>
                  <tr>
                    <td>18:00 hs</td>
                    <td> Centrales (LatFem)</td>
                  </tr>
                  <tr>
                    <td>18:30 hs</td>
                    <td> Circulantes</td>
                  </tr>
                  <tr>
                    <td>19:00 hs</td>
                    <td> Las Quisquillosas</td>
                  </tr>
                  <tr>
                    <td>19:30 hs</td>
                    <td> Efecto Iceberg (El Extraordinario)</td>
                  </tr>
                  <tr>
                    <td>20:00 hs</td>
                    <td> Modo historia</td>
                  </tr>
                  <tr>
                    <td>20:30 hs</td>
                    <td> Fugas (Anfibia Podcast)</td>
                  </tr>
                  <tr>
                    <td>21:15 hs</td>
                    <td> Barley, Almirante & Scotch</td>
                  </tr>
                  <tr>
                    <td>22:00 hs</td>
                    <td> Fiesta Inauguración <br /> (DJ en vivo)</td>
                  </tr>
                </tbody>
              </table>

              <Heading as='h1' sx={{ fontSize: '3em', textAlign: 'center', fontFamily: 'Kanit', mb: 2 }}>SÁBADO</Heading>
              <hr />
              <table sx={{ ...styles.table, ...styles.sabado }}>
                <thead>
                  <tr>
                    <th colSpan="2">Biblioteca Argentina</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >9:00 a 13:00 hs </td>
                    <td> Taller: guión y audio para podcast documental: El paisaje sonoro de Las Raras. Partiendo desde la experiencia de Las Raras en la creación de distintos tipos de podcast documental, revisaremos en detalle las diferentes etapas de la producción y escucharemos ejemplos que ilustran cómo contar historias reales entendiendo al sonido como materia prima narrativa y estética. Única actividad arancelada. Más info aquí.</td>
                  </tr>
                </tbody>
              </table>
              <table sx={{ ...styles.table, ...styles.sabado }}>
                <thead>
                  <tr>
                    <th colSpan="2">Galpón 11</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14:00 hs</td>
                    <td>Cómo se hace: Maneco. A cargo de Flora Flores Iborra (Tristana)</td>
                  </tr>
                  <tr>
                    <td>14:20 hs </td>
                    <td> Moria, Pity, Fort. Trilogía de biografías sonoras, a cargo de Tomás Pérez Vizzón (Anfibia Podcast)</td>
                  </tr>
                  <tr>
                    <td>14:40 hs </td>
                    <td> Cómo se hace: Los últimos días de Maradona (Adonde Media). A cargo de Mariano Pagella.</td>
                  </tr>
                  <tr>
                    <td>15:00 hs </td>
                    <td> Work in progress: El Doctor (Erre Podcast). A cargo de Nicolás Maggi.</td>
                  </tr>
                  <tr>
                    <td>15:30 hs </td>
                    <td> Work in progress<br /> Matar a una puta sindicalista (Parque Podcast). A cargo de Arlen Buchara y Laura Hintze</td>
                  </tr>
                  <tr>
                    <td>16:00 hs </td>
                    <td> Work in progress: los nuevos proyectos de Posta. A cargo de Luciano Banchero</td>
                  </tr>
                  <tr>
                    <td>16:20 hs </td>
                    <td> La trilogía de Julio Rojas. A cargo de Ignacio Saldaña</td>
                  </tr>
                  <tr>
                    <td>17:00 hs </td>
                    <td> TDK 90s (Erre podcast). Un podcast con todos los discos editados en la década del 90.</td>
                  </tr>
                  <tr>
                    <td>17:30 hs </td>
                    <td> Sin telón: paciente 1203 (Tripea)</td>
                  </tr>
                  <tr>
                    <td>18:00 hs </td>
                    <td> Early Access</td>
                  </tr>
                  <tr>
                    <td>18:30 hs </td>
                    <td> Ilustratonta (Bengala)</td>
                  </tr>
                  <tr>
                    <td>19:00 hs </td>
                    <td> No quieren que sepas (Amnistía Internacional)</td>
                  </tr>
                  <tr>
                    <td>19:30 hs </td>
                    <td> Sherpas (El Gato y la Caja)</td>
                  </tr>
                  <tr>
                    <td>20:00 hs </td>
                    <td> Generación Zoe: La estafa más insólita de la historia argentina (Interés General)</td>
                  </tr>
                  <tr>
                    <td>20:30 hs </td>
                    <td> Tercera Oposición</td>
                  </tr>
                </tbody>
              </table>


              <Heading as='h1' sx={{ fontSize: '3em', textAlign: 'center', fontFamily: 'Kanit', mb: 2 }}>DOMINGO</Heading>
              <hr />
              <table sx={{ ...styles.table, ...styles.domingo }}>
                <thead>
                  <tr>
                    <th colSpan={2}>Galpón 11</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>11:00 a 13:00 hs </td>
                    <td> Mundial de ideas. Espacio donde productores independientes presentan sus proyectos en cinco minutos ante un jurado que devuelve con consejos e ideas para su desarrollo.</td>
                  </tr>
                  <tr>
                    <td>13:00 hs </td>
                    <td> Taller de actuación de voz</td>
                  </tr>
                  <tr>
                    <td>14:00 hs </td>
                    <td> Encuentro de productoras de podcast. Representantes de las productoras más importantes del país se juntan a conversar sobre el estado actual del podcast en Argentina y a presentar la Cámara de Productoras de Podcasts Argentinas.</td>
                  </tr>
                  <tr>
                    <td>15:00 hs </td>
                    <td> Creatividad en el branded podcast. ¿Cómo podemos ser creativos en los podcasts para empresas? En esta mesa, algunos de los líderes del mercado de branded podcast cuentan cómo hacen para inyectar creatividad y nuevas ideas en sus producciones. ¿Cómo establecer una relación de confianza con los clientes? ¿Cómo mantener el equilibrio entre lo artístico y lo funcional? ¿Cómo pitchear ideas?</td>
                  </tr>
                  <tr>
                    <td>15:30 hs </td>
                    <td> Trabajo freelance en podcast. La producción de podcast requiere de una gran variedad de saberes específicos, muchos de ellos contratados de manera freelance. En esta mesa, profesionales freelance dan un panorama sobre cómo es trabajar tanto para el podcast argentino como para productoras extranjeras, cómo organizar los tiempos y cómo ofrecer su trabajo de manera eficiente para ser contratados.</td>
                  </tr>
                </tbody>
              </table>

              <table sx={{ ...styles.table, ...styles.domingo }}>
                <thead>
                  <tr>
                    <th colSpan={2}>Cine El Cairo / Cierre festival</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20:30 hs </td><td> Nos vemos después (Estudio Ochenta)</td>
                  </tr>
                  <tr>
                    <td>20:45 hs </td><td> Luthiers: hechos de música y humor</td>
                  </tr>
                  <tr>
                    <td>21:15 hs </td><td> Muestra de trailers</td>
                  </tr>
                  <tr>
                    <td>21:30 hs </td><td> Presentación piloto de la Maratón de creación de podcast</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Container>
        </Layout>
      </StickyProvider>
    </ThemeProvider >
  )
}

const styles = {
  table: {
    fontSize: '1.8em',
    textAlign: 'center',
    fontFamily: 'Kanit',
    mb: 5,
    width: '100%',
    th: {
      fontSize: '1.5em',
      width: '100%'
    },
    td: {
      fontSize: '0.8em',
      py: 4,
      px: 2,
      '&:first-of-type': {
        color: 'white',
        backgroundColor: 'third'
      }
    },
    tr: {
      display: ['flex', ''],
      flexDirection: ['column', 'row'],
      td: {
        width: ['100%', '25%'],
        lineHeight: '1.2em',
        '~td': {
          m: 'auto',
          p: '1.5em 0',
          width: ['90%', '75%'],
        },
      }
    },
  },
  domingo: {
    tbody: {
      backgroundColor: '#F8553290',
      tr: {
        '&:nth-of-type(2n+2)': {
          backgroundColor: '#F85532',
        }
      }
    }
  },
  sabado: {
    tbody: {
      backgroundColor: '#368DEC90',
      tr: {
        '&:nth-of-type(2n+2)': {
          backgroundColor: 'fourth',
        }
      }
    }
  },
  viernes: {
    tbody: {
      backgroundColor: 'secondary',
      tr: {
        '&:nth-of-type(2n+2)': {
          backgroundColor: '#B39DE5',
        }
      }
    }
  },
}

