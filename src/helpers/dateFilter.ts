import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');
  for(let i in list) {
    if(
      list[i].date.getFullYear() === parseInt(year) && 
      (list[i].date.getMonth()) === parseInt(month)
    ){
      newList.push(list[i]);
    }
  }

  return newList;
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZertoDate(day)}/${addZertoDate(month)}/${year}`;
}

const addZertoDate = (n: number): string => n< 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
  let[year, month] = currentMonth.split('-');
  let months = ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[parseInt(month) -1]} de ${year}`
}

