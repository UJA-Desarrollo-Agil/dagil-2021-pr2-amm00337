// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Un día más en tu mísera vida</h1>\
        <img src='media/games/tutorial/suenio.png' class='float_right'>\
        <p>Te acabas de despertar y tienes tanto sueño que no sabes ni dónde estás\
		(es lo que tiene quedarse hasta las 4 programando sin hacer caso a Víctor).</p>\
        <p> De repente escuchas un ruido atronador proviniente de tu madre.\
		Como ya te ha pasado infinidad de veces, intuyes que vas a tener que hacer algo\
		si quieres seguir con vida...\
		</p>\
        <p class='transient'>Click <a href='hub'>aquí para continuar.</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "Obedeces las órdenes y vas a comprar",
        displayOrder: 1
    }),
	comprar: new undum.SimpleSituation(
        "<p>Pese a que quieres mucho a tu amigo y te cae genial\
        no puedes permitir que nada se imponga en tu camino hacia la tienda\
        para comprar.\
        </p>\
		<img src='media/games/tutorial/punio.png' class='float_right'>\
        <p>Incluso diciéndole que no podías hacer nada hasta que acabases tus tareas\
		sigue insistiéndote en ese maravilloso plan así que tienes que pensar en una forma\
		de librarte de él.\
		</p>\
		<p>Sientes el espíritu de Mike Tyson apoderándose de ti y le sueltas un uppercut\
		que lo deja KO.\
		</p>\
		<p>Ahora sí que puedes <a href='tienda'>seguir tu camino hacia la tienda.</a>\
		</p>",
    ),
	tienda: new undum.SimpleSituation(
        "<p>Aunque parecía imposible, por fin estás en la tienda y con las ansiadas lentejas\
        en tus manos.\
        </p>\
        <p>Una vez has pagado y vas a volver, decides escuchar algo en el móvil para amenizar el camino.\
		Puedes <a href='./entretenimiento-boost'>escuchar lo último que ha salido en Musicfy</a> o \
		<a href='./suerte-boost'>prácticar tus mejores rezos mientras escuchas RadioMaría.</a>\
		</p>\
		<p>Conforme te vas acercando a tu casa puedes oler ese magnífico guiso que se está preparando\
		a fuego lento así que, sin pensarlo dos veces, <a href='casa'>entras en casa.</a>\
		</p>",
		{
            actions: {
				"suerte-boost": function(character, system, action) {
                    system.setQuality("suerte", character.qualities.suerte+1);
					system.setQuality("entretenimiento", character.qualities.entretenimiento-1);
				},
				"entretenimiento-boost": function(character, system, action) {
                    system.setQuality("entretenimiento", character.qualities.entretenimiento+1);
					system.setQuality("suerte", character.qualities.suerte-1);
				}
			}
        }
    ),
	casa: new undum.SimpleSituation(
        "<p>Cuando abres la puerta, ves que tu madre viene corriendo en tu dirección rezando para\
        que hubieses comprado las lentejas correctas.\
        </p>\
        <p>Al darselas, empieza a llorar. No sabes qué hacer, te sientes nervioso.\
		</p>\
		<p>Tu querida madre levanta la cabeza y, para tu sorpresa, ¡está llorando de alegría!.\
		Te da un abrazo mientras te dice que eres el mejor hijo del mundo y que sin tí no hubiese\
		sido posible hacer la comida.\
		</p>\
		<p>¿Es así como se sienten los dioses? Tal vez en tu vida diaria seas un fracaso, pero hoy,\
		<strong>has salvado el mundo.</strong>\
		</p>\
		<p>No todo ha acabado aún. Todavía queda <a href='implicit'>la prueba final.</a>\
		</p>\
		</p>",
    ),
    amigo: new undum.SimpleSituation(
        "<p>¿De verdad pensabas que tu madre se iba a fiar de ti?\
        Jamás podrás escapar del sexto sentido materno.\
		Tu madre había estado escuchando toda la conversación con tu amigo desde el balcón.\
        </p>\
        <p>Cuando te ve irte junto a tu amigo, se apoya en la barandilla, coge su arma a distancia y...\
        ¡BOOOOM!.\
        </p>\
		<p>Efectivamente, acabas de ser víctima del Chanclatrón-3000 de alta precisión. La próxima\
		vez piensa mejor antes de traicionar a tu madre e irte de rositas.\
		<img src='media/games/tutorial/chancla.jpg' class='float_right'>\
		</p>",
    ),
    quedarse: new undum.SimpleSituation(
        "<p>Como buen estudiante de informática que eres prefieres quedarte en casa y\
        terminar las prácticas de Desarrollo Ágil.\
        </p>\
        <p>Tu argumento parecía tan bueno que igual tu madre lo comprendía. No obstante, te conoce\
        como si te hubiese parido y sabe que no vas a hacer otra cosa que rascarte el ombligo así\
		que te tirará por la ventana si hace falta para que vayas a comprar.\
		</p>\
		<p>La próxima vez recuerda: ¿No ir a comprar? Golpe de remo.\
		</p>\
		<p><img src='media/games/tutorial/remo.jpg'>\
        </p>",
        {
            heading: "Dices que pasas de rollos y te quedas en casa",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-entretenimiento-action'>boost your\
        entretenimiento</a>, you will see the entretenimiento change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            heading: "Showing a Progress Bar",
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-entretenimiento-action": function(character, system, action) {
                    system.doLink("boost-entretenimiento");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'entretenimiento', character.qualities.entretenimiento+1
                );
            }
        }
    ),
    "boost-entretenimiento": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        optionText: "Saving and Loading"
    }),
    "high-luck-only": new undum.SimpleSituation(
        "<p>¡Los rezos funcionan! No se sabe qué dios te ha ayudado pero la fortuna está\
        de tu parte. Tu madre se siente más generosa que nunca y permite a su fiel secuaz\
        quedarse con la vuelta de lo que sobró en la tienda.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Opción de buena suerte",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.suerte > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Vaya, cuando pensabas que todo era perfecto, tu madre se acerca y aunque aún está contenta, te pide la\
        vuelta de la compra. Quién sabe qué hubiese pasado si hubieses rezado en vez de escuchar música.\
        </p>\
		<p>No te queda otra opción, tendrás que seguir siendo pobre pero al menos salvaste el mundo.\
        </p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Opción de mala suerte",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.suerte <= 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            optionText: "Finish the Tutorial",
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    suerte: new undum.IntegerQuality(
        "Suerte", {priority:"0001", group:'stats'}
    ),
    entretenimiento: new undum.NumericQuality(
        "Entretenimiento", {priority:"0002", group:'stats'}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.suerte = 0;
    character.qualities.entretenimiento = 0;
    system.setCharacterText("<p>Aquí puedes ver cómo te sientes en todo momento.</p>");
};
