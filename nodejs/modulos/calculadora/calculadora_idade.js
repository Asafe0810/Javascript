// Calculadora de Idade //
export function idade(nome, anoNasc, anoNecessario) {
    const idadeCalculada = anoNecessario - anoNasc;
    return `Olá ${nome}! Em ${anoNecessario} você terá ${idadeCalculada} anos!`;
}