import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent {
    currentPas = ''
    passwordDifficulty = ''
    messageEmpty = 'Please type at least 8 characters.'
    messageShort = 'Password is too short!'
    messageEasy = 'Too easy! You can do better.'
    messageMedium = 'Should be more complex.'
    messageHard = 'Good job!'

    constructor() {
        if (this.currentPas === '') {
            this.passwordDifficulty = 'empty'
        }
    }

    onUpdatePassword(event: InputEvent) {
        const lett = /[A-Za-z]/;
        const num = /[0-9]/;
        const symb = /[!@#$%^&*()]/;

        this.currentPas = ( < HTMLInputElement > event.target).value;
         console.log(( < HTMLInputElement > event.target).value)

        if (this.currentPas.length >= 1 && this.currentPas.length < 8) {
            return this.passwordDifficulty = 'short'
        }

        if (num.test(this.currentPas) && lett.test(this.currentPas) && symb.test(this.currentPas)) {
            return this.passwordDifficulty = 'hard'

        }
        if (num.test(this.currentPas) && lett.test(this.currentPas) || num.test(this.currentPas) && symb.test(this
                .currentPas) || lett.test(this.currentPas) && symb.test(this.currentPas)) {
            return this.passwordDifficulty = 'medium'

        }
        if (this.currentPas === '') {
            return this.passwordDifficulty = 'empty'
        }
        
        return this.passwordDifficulty = 'easy'

    }
  
    resetPas() {
        this.currentPas = ''
        if (this.currentPas === '') {
            this.passwordDifficulty = 'empty'
        }
    }
}