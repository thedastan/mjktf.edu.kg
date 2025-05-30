import React, { useEffect, useState } from "react";
import school from "./../../../images/факультет.jpg";
import { media } from "../../media";
import { api } from "../../../http/api";

const Info = () => {
	const [modal, setModal] = useState(false);

	const [datas, setDatas] = useState([]);
	const [datas2, setDatas2] = useState([]);


	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await api.get("/quantity_students/");  
				setDatas(data);
			} catch (error) {
				console.error("Error fetching data", error);
			}
		};

		fetchData();
	}, []);

    useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await api.get("/quantity_teachers/");  
				setDatas2(data);
			} catch (error) {
				console.error("Error fetching data", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section id="info">
			<div className="container">
				<div className="info-general__width" />
				<div className="info-general">
					<div className="info-general__block">
						<div
							style={{
								width: media(250, 625),
								height: media(190, 438),
								margin: media(10, 25),
							}}
						/>
						<img
							src={school}
							alt="img"
							style={{ width: media(250, 625), height: media(190, 438) }}
						/>
					</div>
					<div className="info-general__block2">
						<h1>Факультет тууралуу маалымат</h1>
						{/*<p>СРЕДНЯЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №1.</p>*/}
						<div className="info-general__block2__gen">
							<div
								className="info-general__block2__gen__cer"
								style={{ width: media(70, 100), height: media(70, 100) }}>
								<img
									src="https://static6.depositphotos.com/1000291/574/i/450/depositphotos_5743311-stock-photo-graduate-students.jpg"
									alt="img"
								/>
							</div>
							<div className="info-general__block2__gen__item">
								<h2>Учурдагы студенттер</h2>
                                {datas.map((el,index) => (
                                    <h3 key={index}>{el.quantity_students}</h3>
                                ))}
								 
							</div>
						</div>
						<div className="info-general__block2__gen">
							<div
								className="info-general__block2__gen__cer"
								style={{ width: media(70, 100), height: media(70, 100) }}>
								<img
									src="https://ncrdo.ru/upload/medialibrary/f79/f7923bdbe63a99979beca3b9da2f9fb8.jpg"
									alt="img"
								/>
							</div>
							<div className="info-general__block2__gen__item">
								<h2>Учурдагы окутуучулар</h2>
								{datas2.map((el,index) => (
                                    <h3 key={index}>{el.quantity_teachers}</h3>
                                ))}
							</div>
						</div>
					</div>
				</div>
				<div className="info-general2">
					<button onClick={() => setModal(true)}>Толук маалымат</button>
					{modal && (
						<div className="info-general2__modal">
							<div className="info-general2__modal__block">
								<h1 onClick={() => setModal(false)}>Жабуу</h1>
								<p>
									Ош МПУ - ОРДОЛУУ ОШТУН КУТУ, ООМАТТУУ БИЛИМ ЖУРТУ!
									Кыргызстандын орто мектептерине терең пайдубалдуу, жогорку
									квалификациялуу педагог адистерди даярдоонун түптүү
									устаканасына айланган Ош мамлекеттик педагогикалык
									университети 1925-жылы ачылып, түштүктөгү эң алгачкы
									педагогикалык окуу жай болуп негизделген. Кезинде Ош
									педагогикалык окуу жайы катары биринчилерден болуп өлкөбүздүн
									түштүгүндө өз ишмердүүлүгүн жүргүзүп баштаган. Билимдин
									очогуна айланган аталга окуу жай жыл өткөн сайын жаңыланып,
									бир топ өзгөрүүлөргө дуушар болгон. Белгилей кетсек, 1994-жылы
									Ош педагогикалык окуу жайы бир канча жаңы адистиктердин
									ачылуусу менен Ош педагогикалык колледжи болуп түзүлсө,
									1996-жылы Ош жогорку колледжи болуп өзгөргөн, 2002-жылы Кыргыз
									окмотунун №316 токтомунун негизинде Ош жогорку колледжине “Ош
									гуманитардык-педагогикалык институту” статусу ыйгарылган.
									Ошондой эле 2021-жылдын 5-апрелинде КРдин Билим берүү жана
									илим министрлигинин №368\1 буйрунугунун негизинде Ош
									гуманитардык-педагогикалык институтуна Ош мамлекеттик
									педагогикалык университети макамы берилди. Ош мамлекеттик
									педагогикалык университети терең пайдубалдуу билимге ээ
									жогорку квалификациялуу атайын адистерди даярдоочу илимий
									мекеме катары ийгиликтуу иш-аракеттерди жүзөөгө ашырууда. Окуу
									жайда жалпы 13787 студент таалим алып, 300гө жакын
									профессордук-окутуучулук курам алгылыктуу эмгектенүүдө. Учурда
									университетти – ынтымактуулук менен жамаатты алга сүрөп,
									педагогика илимдеринин доктору, профессор Зулуев Бекмурза
									Бекболотович жетектеп келүүдө. ОшМПУнун МИССИЯСЫ Билим берүүдө
									сапат кепилдигин камсыздоо менен коомдун өнүгүүсүнө салым кошо
									алган, интеллектуалдык потенциалы жогору, атаандашууга
									жөндөмдүү, дүйнөлүк деңгээлге интеграцияланган, педагогикалык,
									социалдык - экономикалык багыттагы жогорку жана орто кесиптик
									компетенттүү адистерди даярдоо.
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Info;
