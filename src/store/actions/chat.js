export const enviarMensagem = (mensagem) => {
    return {
        type: 'ENVIAR_MENSAGEM',
        payload: { mensagem }
    }
} 
