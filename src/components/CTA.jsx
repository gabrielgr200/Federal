import { useState } from "react";
import InputMask from "react-input-mask";
import styles from "../style";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../constants/utils';

function CTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [invoicing, setInvoicing] = useState('');
  const [cnpj, setCnpj] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c324ad6f-6bab-4989-bda6-40a92e9636fb");
    formData.append("from_name", "Federal Invest");
    formData.append("subject", "Nova mensagem de contato do site");

    const object = Object.fromEntries(formData);

    const cleanCnpj = cnpj.replace(/\D/g, "");

    if (cleanCnpj.length !== 14) {
      toast.error("CNPJ inválido");
      return;
    }

    if (!object.Nome || !object.Email || !object.Telefone || !object["Faturamento médio mensal"] || !object.CNPJ) {
      toast.error("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Informações Enviada!");
        console.log("Success", res);

        setName('');
        setEmail('');
        setNumber('');
        setInvoicing('');
        setCnpj('');
      } else {
        toast.error("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar.");
    }
  };

  return (
    <motion.section initial='hidden' animate='visible' id="talk" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-dimBlueClear rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <motion.h2 variants={slideInFromLeft(0.8)} className={styles.heading2}>Antecipe seus recebíveis <br /> de forma rápida e segura!</motion.h2>
        <motion.p variants={slideInFromLeft(1)} className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Preencha o cadastro ao lado em menos de <br /> 1 minuto e fale com nossos especialistas em antecipação de recebíveis.
        </motion.p>
      </div>

      <div className="flex-1 flex justify-end">
        <motion.form variants={slideInFromRight(1.6)} className="flex flex-col gap-2 w-full sm:w-[350px]" onSubmit={onSubmit}>

          <InputMask
            mask="99.999.999/9999-99"
            className={styles.input}
            type="text"
            placeholder="CNPJ"
            onChange={(e) => setCnpj(e.target.value)}
            value={cnpj}
            name="CNPJ"
            required
          />

          <input
            className={styles.input}
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="Nome"
            required
          />

          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="Email"
            required
          />

          <InputMask
            mask="(99)99999-9999"
            className={styles.input}
            type="text"
            placeholder="Telefone"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            name="Telefone"
            required
          />

          <input
            className={`${styles.input} appearance-none`}
            type="number"
            placeholder="Faturamento médio mensal"
            onChange={(e) => setInvoicing(e.target.value)}
            value={invoicing}
            name="Faturamento médio mensal"
            onWheel={(e) => e.target.blur()}
            min='0'
            style={{
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
              appearance: 'textfield',
              margin: 0,
            }}
            required
          />


          <input className={styles.button} type="submit" value="Enviar" />

          <div>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default CTA;
