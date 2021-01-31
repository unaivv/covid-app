import "./App.css";

function App() {
    const handleClick = (e) => {
		console.log(e.target.classList.contains('active'))
		if(!e.target.classList.contains('active')){
			document.querySelector(".book.active").classList.remove("active");
			e.target.classList.add("active");
		}
    };
    const replaceVerticalScrollByHorizontal = (event) => {
        if (event.deltaY !== 0) {
            document
                .getElementById("books")
                .scroll(window.scrollX + event.deltaY * 5, window.scrollY);
        }
        return;
    };
    window.addEventListener("wheel", replaceVerticalScrollByHorizontal);

    return (
        <div className="App">
            <header>
				<div id="branding">
                	<img src="/img/logo.svg" alt="Logo COVID" />
				</div>
				<div id="logos">
					<img src="/img/isc.svg" alt="isc - Instituo de Salud Carlos III" />
					<img src="/img/ministerioSanidad.svg" alt="Ministerio de Sanidad -  Gobierno de España" />
				</div>
            </header>
            <div id="filters"></div>
            <div id="books">
                <div
                    className="book active"
                    id="01-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">01/20</div>
                        <div className="month">Enero</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="02-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">02/20</div>
                        <div className="month">Febrero</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="03-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">03/20</div>
                        <div className="month">Marzo</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="04-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">04/20</div>
                        <div className="month">Abril</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="05-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">05/20</div>
                        <div className="month">Mayo</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="06-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">06/20</div>
                        <div className="month">Junio</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="07-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">07/20</div>
                        <div className="month">Julio</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="08-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">08/20</div>
                        <div className="month">Agosto</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="09-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">09/20</div>
                        <div className="month">Septiembre</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="10-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">10/20</div>
                        <div className="month">Octubre</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="11-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">11/20</div>
                        <div className="month">Noviembre</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="12-2020"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">12/20</div>
                        <div className="month">Diciembre</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
                <div
                    className="book"
                    id="01-2021"
                    onClick={(e) => handleClick(e)}
                >
                    <div className="dates">
                        <div className="date">01/21</div>
                        <div className="month">Enero</div>
                    </div>
                    <div className="cases">+2500k</div>
                </div>
				<div className="inside">
					<div className="counts">
						<div className="countCases">
							<div className="label">Contagios</div>
							<div className="number">2.41</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 15%</div>
						</div>
						<div className="countDeadths">
							<div className="label">Fallecidos</div>
							<div className="number">412</div>
							<div className="percent red"><img src="/img/arrowUpRed.svg" alt="^"/> 7%</div>
						</div>
						<div className="countVacunations">
							<div className="label">Vacunaciones</div>
							<div className="number">1.662</div>
							<div className="percent red"><img src="/img/arrowUpGreen.svg" alt="^"/> 21%</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    );
}

export default App;
