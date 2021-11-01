import '../style/CP_card.css';

function CP_card(){
	return(
	<div class="cp_card">
		<div class="cp_card_container">
			
			<div class="cp_card_head">
				<p class="cp_number_text">№2345</p>
				<h2 class="cp_name_text">Название обычно очень <br/>длинное</h2>
				<img class = "cp_card_icon" src="/img/edit_note_black_24dp.svg"/>	
			</div>
			
			<div class="cp_card_i">
				<div class="cp_card_info">
					<p class = "cp_card_info_unit">
						<span id = "cp_card_info_unit_man">Заказчик:</span>
						Имя заказчика
					</p>
					<p class = "cp_card_info_unit">
						<span id = "cp_card_info_unit_man">Партнёр:</span>
						Имя партнёра
					</p>
					<p class = "cp_card_info_unit">
						<span id = "cp_card_info_unit_man">От:</span>
						Имя менеджера
					</p>
				</div>
				<img id="cp_card_icon_time" src="/img/rectangle.svg"/>
			</div>

			<div class="cp_card_description">
				<div class="text_field">
					<h4 id="desc_head">Описание</h4>
					<div id="cp_card_description_text">
						Мой дядя самых честных правил,
						Когда не в шутку занемог,
						Он уважать себя заставил
						И лучше выдумать не мог.
						Его пример другим наука;
						Но, боже мой, какая скука
						С больным сидеть и день и ночь,
						Не отходя ни шагу прочь!
						Какое низкое коварство
						Полуживого забавлять,
						Ему подушки поправлять,
						Печально подносить лекарство,
						Вздыхать и думать про себя:
						Когда же черт возьмет тебя!
					</div>	
				</div>
				<div class="cp_card_description_files">
					<div class="cp_card_description_files_item">
						<img src="/img/file_excel.png"/>
						<p class="cp_card_description_files_text">Файл.xlsx</p>
					</div>
					<div class="cp_card_description_files_item">
						<img src="/img/file_word.png"/>
						<p class="cp_card_description_files_text">Файл.docx</p>
					</div>
					<a id="cp_card_description_downloadall_text" href="https://www.apple.com">Скчать всё</a>
				</div>
			</div>

			<div class="cp_card_magic">
				<img src="/img/magic.svg"/>
				<a id = "cp_card_magic_gen" href="#">Автоматическая генерация</a>
			</div>

			<div class="cp_card_solution_files">
				<div class="cp_card_solution_files_item">
					<img class="cp_card_solution_files_img" src="/img/file_word_1.png"/>
					<p class="cp_card_solution_files_text">решение.docx</p>
				</div>
				<div class="cp_card_solution_files_item">
					<img src="/img/file_word_1.png"/>
					<p class="cp_card_solution_files_text">решение.docx</p>
				</div>
				<div class="cp_card_solution_files_item" id="cp_card_solution_files_add">
					<img src="/img/add.svg"/>
				</div>
				<button>
					Отправить
				</button>
			</div>

		</div>	
	</div>);
}


export default CP_card;