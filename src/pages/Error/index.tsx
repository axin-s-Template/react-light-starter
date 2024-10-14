import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ExclamationTriangleIcon, HomeIcon } from "@radix-ui/react-icons";
import React from "react";
import { isRouteErrorResponse, Link, useNavigate, useRouteError } from "react-router-dom";
/** 全局错误处理页面 */
const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  let title = "出错了";
  let description = "抱歉，发生了一个意外错误。";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "404 - 页面未找到";
      description = "抱歉，您请求的页面不存在。";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Alert variant="destructive" className="max-w-md w-full mb-6">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
      <div className="flex space-x-4 mb-6">
        <Button variant="outline" onClick={goBack}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> 返回
        </Button>
        <Button asChild>
          <Link to="/">
            <HomeIcon className="mr-2 h-4 w-4" /> 首页
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
