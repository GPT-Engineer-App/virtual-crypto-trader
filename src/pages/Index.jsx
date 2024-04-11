import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Stack, Image, useToast } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Index = () => {
  const [balance, setBalance] = useState(1000);
  const [price, setPrice] = useState(50000);
  const [amount, setAmount] = useState(0);
  const toast = useToast();

  const buy = () => {
    if (balance >= amount * price) {
      setBalance(balance - amount * price);
      toast({
        title: "매수 성공",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "잔액 부족",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const sell = () => {
    setBalance(balance + amount * price);
    toast({
      title: "매도 성공",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        가상화폐 매매
      </Heading>
      <Stack spacing={4} direction="row" justify="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaXRjb2lufGVufDB8fHx8MTcxMjgwMjA4NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Bitcoin" boxSize="100px" />
        <Box>
          <Text fontSize="lg">현재 가격: {price.toLocaleString()}원</Text>
          <Text fontSize="lg">보유 잔액: {balance.toLocaleString()}원</Text>
        </Box>
      </Stack>
      <Stack spacing={4} direction="row" justify="center">
        <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="수량" />
        <Button leftIcon={<FaArrowUp />} colorScheme="green" onClick={buy}>
          매수
        </Button>
        <Button leftIcon={<FaArrowDown />} colorScheme="red" onClick={sell}>
          매도
        </Button>
      </Stack>
    </Box>
  );
};

export default Index;
