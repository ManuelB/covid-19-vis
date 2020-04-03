confirmedCases <- c(1, 4, 4, 4, 5, 8, 10, 12, 12, 12, 12, 13, 13, 14, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 27, 46, 48, 79, 130, 159, 196, 262, 482, 670, 799, 1040, 1176, 1457, 1908, 2078, 3675, 4585, 5795, 7272, 9257, 12327, 15320, 19848, 22213, 24873, 29056, 32986, 37323, 43938, 50871, 57695, 62095, 66885, 71808, 77872, 84794)
days <- 1:67

df <- data.frame(confirmedCases, days)
# function needed for visualization purposes
sigmoid = function(params, x) {
  params[1] / (1 + exp(-params[2] * (x - params[3])))
}
# fitting code
fitmodel <- nls(confirmedCases ~ SSlogis(days, phi1, phi2, phi3), data = df)

# visualization code
# get the coefficients using the coef function
alpha <- coef(fitmodel)  #extracting coefficients
plot(confirmedCases ~ days, data = df, main = "Logistic Growth Model of COVID-19 Cases", 
     xlab = "Tage seit dem ersten Fall", ylab = "COVID-19 Cases", xlim = c(0, 100), ylim = c(0, 120000))  # Census data
curve(alpha[1]/(1 + exp(-(x - alpha[2])/alpha[3])), add = T, col = "blue")  # Fitted model

