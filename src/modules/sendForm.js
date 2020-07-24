'use strict';

class SendForm {
  constructor(form, url) {
    this.form = form;
    this.url = url;
    this.obj = {};
    this.msgBox = document.createElement('div');
  }

  showStatus(status) {
    if (status) {
      this.msgBox.className = 'status-msg';

      if (this.form.querySelector('.status-msg')) {
        this.form.querySelector('.status-msg').remove();
      }

      this.msgBox.style.color = 'red';
      this.msgBox.textContent = `${status}`;
      this.form.append(this.msgBox);
    } else {
      if (this.form.querySelector('.status-msg')) {
        this.form.querySelector('.status-msg').remove();
      }
    }
  }

  getData() {
    const formData = new FormData(this.form);

    formData.forEach((value, key) => {
      if (value.trim() === '') {
        this.showStatus(`Ошибка в поле: ${key}`);
        throw new Error(`Ошибка в поле: ${key}`);
      }

      this.obj[key] = value;
    });

    if (!Object.keys(this.obj).includes('privacy')) {
      this.showStatus('Поставьте галочку');
      throw new Error(`Поставьте галочку`);
    } else {
      this.showStatus();
    }
  }

  sendData() {
    const promise = fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(this.obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    promise
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`>> status: ${response.status}`);
        }
        this.form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default SendForm;